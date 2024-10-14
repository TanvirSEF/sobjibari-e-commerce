"use client";
import FormHeader from "@/components/backend/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import SubmitButton from "@/components/Forminputs/Submitbtn";
import TextInput from "@/components/Forminputs/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { generateCoupon } from "@/lib/generateCoupon";
import { generateisoFormattedDate } from "@/lib/generateisoFormattedDate";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/coupons");
  }
  async function onSubmit(data) {
    const couponCode = generateCoupon(data.title);
    const isoFormattedDate = generateisoFormattedDate(data.expireDate);
    data.expireDate = isoFormattedDate;
    data.couponCode = couponCode;
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect);
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
            label="Publish your Coupon"
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
