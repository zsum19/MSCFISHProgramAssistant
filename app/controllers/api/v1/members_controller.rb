# frozen_string_literal: true

module Api
  module V1
    class MembersController < ApplicationController
      def index
        member = Member.all.order(first_name: :desc)
        render json: member
      end

      def create
        member = Member.create!(member_params)

        if member
          render json: member
        else
          render json: member.errors
        end
      end

      def show
        if member
          render json: member
        else
          render json: member
        end
      end

      def remigrate
        ActiveRecord::Migration.drop_table(:members, force: :cascade)
        ActiveRecord::Migration.create_table(:members)
        ActiveRecord::Migration.add_column(:members, :role_id, :bigserial)
        ActiveRecord::Migration.add_foreign_key(:members, :roles, column: :role_id)
        ActiveRecord::Migration.add_column(:members, :first_name, :string, null: false)
        ActiveRecord::Migration.add_column(:members, :last_name, :string, null: false)
        ActiveRecord::Migration.add_column(:members, :email, :string, null: false)
        ActiveRecord::Migration.add_column(:members, :num_referrals, :integer, default: 0,
                                                                               null: false)
        ActiveRecord::Migration.add_column(:members, :created_at, :timestamp)
        ActiveRecord::Migration.add_column(:members, :updated_at, :timestamp)
      end

      def update
        member&.update(member_params)
        render json: member
      end

      def destroy
        member&.destroy
        render json: { message: 'Member Deleted!' }
      end

      def currentMember
        render json: current_member
      end

      private

      def member_params
        params.permit(:role_id, :first_name, :last_name, :email, :num_referrals)
      end

      def member
        @member ||= Member.find(params[:id])
      end
    end
  end
end
