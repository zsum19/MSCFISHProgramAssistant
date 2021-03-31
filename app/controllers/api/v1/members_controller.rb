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

      def destroy
        member&.destroy
        render json: { message: 'Member Deleted!' }
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
