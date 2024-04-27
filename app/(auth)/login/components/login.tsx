"use client";
import React, { useState } from "react";
import { Button, Col, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/features/apis/auth-api";

const LoginComponent = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [login] = useLoginMutation();

  const handleSubmit = async (values: any) => {
    const response: any = await login({ ...values, isAdmin: true });
    if (response?.error) {
      return message.error(response?.error || "Something went wrong.");
    }
  };

  return (
    <div className="mt-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label={
            <span className="text-[14px] font-normal leading-6 text-[#3D3E46]">
              Email
            </span>
          }
          name="email"
          rules={[
            { message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input
            // type="email"
            placeholder="user@mail.com"
            className="md:w-[440px] w-[300px]"
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="text-[14px] font-normal leading-6 text-[#3D3E46]">
              Password
            </span>
          }
          name="password"
        >
          <Input.Password
            placeholder="password"
            // iconRender={(visible) =>
            //   visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            // }
          />
        </Form.Item>       
        <Col>
          <div>
            <Button htmlType="submit" className="btn-table btn-primary w-full">
              Log In
            </Button>
          </div>
        </Col>
      </Form>      
    </div>
  );
};

export default LoginComponent;
