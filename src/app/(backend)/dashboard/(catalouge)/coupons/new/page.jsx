"use client";
import FormHeader from "@/components/backend/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import SubmitButton from "@/components/Forminputs/Submitbtn";
import TextInput from "@/components/Forminputs/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { generateCoupon } from "@/lib/generateCoupon";
import ToggleInput from "@/components/Forminputs/ToggleInput";

export default function NewCoupon() {
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data) {
    const couponCode = generateCoupon(data.title);
    data.couponCode = couponCode;
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset);
  }
  return (
    <div>
      <FormHeader title="New Coupon" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Coupon Expire Date"
            name="expireDate"
            register={register}
            type="date"
            errors={errors}
            className="w-full"
          />
          <ToggleInput
            label="Publish your Category"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating Coupon Please Wait..."
        />
      </form>
    </div>
  );
}
