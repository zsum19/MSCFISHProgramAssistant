module Api
  module V1
    class RolesController < ApplicationController
      def create
        role = Role.create!(role_params)
      end

      def remigrate
        ActiveRecord::Migration.drop_table(:roles, force: :cascade)
        ActiveRecord::Migration.create_table(:roles)
        ActiveRecord::Migration.add_column(:roles, :name, :string)
        ActiveRecord::Migration.add_index(:roles, :name, unique: true)
        ActiveRecord::Migration.add_column(:roles, :description, :text)
        ActiveRecord::Migration.add_column(:roles, :created_at, :timestamp)
        ActiveRecord::Migration.add_column(:roles, :updated_at, :timestamp)
      end

      private

      def role_params
        params.permit(:name, :description)
      end

      def role
        @role ||= Role.find(params[:id])
      end
    end
  end
end