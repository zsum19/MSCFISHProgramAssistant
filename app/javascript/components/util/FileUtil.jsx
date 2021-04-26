import React from "react";

class FileUtil extends React.Component {
	constructor() {
    super();
    this.state = {
      members: []
    }
  }
	
	ToJSON(csv) {
		var lines = csv.split("\n");
		var result = [];
		var headers = lines[0].split(",");
		
		for (var i = 1; i < lines.length-1; i++) {
			var obj = {};
			var current_line = lines[i].split(",");

			for (var j = 0; j < headers.length; j++) {
				obj[headers[j]] = current_line[j];
			}

			result.push(obj);
		}

		return result;
	}

	InOrderFetches(table, json, current) {
		if (current >= json.length) {
			return;
		}
		const url = `/api/v1/${table}/`;
		const token = document.querySelector('meta[name="csrf-token"]').content;
		
		var obj = json[current];
		var controller_method = `create`;
		
		fetch(url + controller_method, {
			method: "POST",
			headers: {
				"X-CSRF-Token": token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(obj)
		})
			.then(response => {
				if (response.ok) {
					InOrderFetches(table, json, current+1);
				}
			})
	}

	DeleteAndUpdate(table, json) {
		const url = `/api/v1/${table}/`;
		const token = document.querySelector('meta[name="csrf-token"]').content;
		var i = 0;
		fetch(url + `remigrate`, {
			method: "POST",
			headers: {
				"X-CSRF-Token": token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(json)
		})
			.then(response => {
				if (response.ok) {
					InOrderFetches(table, json, 0);
				}
			})
	}
}
export default FileUtil;