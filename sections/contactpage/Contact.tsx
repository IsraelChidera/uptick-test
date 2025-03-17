'use client';

import { Formik } from 'formik';
import * as yup from 'yup';
import React, { RefObject, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import AnimatedText from '@/components/AnimatedText';
import constants from '@/utils/constants';

const Map = dynamic(() => import('@/components/Map/Map'), {
  ssr: false,
});

export const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const sendEmail = () => {
    // e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        constants.emailServiceId!,
        constants.emailTemplateId!,
        form.current as unknown as HTMLFormElement,
        {
          publicKey: constants.emailPublicKey,
        },
      )
      .then(
        () => {
          setIsModalOpen(true);
          setIsLoading(false);
          setMessage(
            "Thank you for contacting Uptick Talent. We'll get back to you shortly",
          );
        },
        (error) => {
          setIsModalOpen(true);
          setIsLoading(false);
          setMessage(error);
        },
      );
  };

  return (
    <section className="mt-[-120px] pt-[120px]  bg-[#111] waves-bg ">
      <div className="flex flex-col gap-[100px] py-[60px] md:py-[100px] font-raleway  px-3 xl:px-[60px] md:px-10 w-full max-w-[1440px] mx-auto">
        <Formik
          initialValues={{
            user_name: '',
            user_email: '',
            user_phone: '',
            message: '',
          }}
          validationSchema={yup.object({
            user_name: yup.string().required('Please enter your name'),
            user_email: yup
              .string()
              .email('Please enter a valid email address')
              .required('Please enter email address'),
            user_phone: yup.number().positive().integer(),
            message: yup.string().required('Please enter a message'),
          })}
          onSubmit={() => {
            sendEmail();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              ref={form as unknown as RefObject<HTMLFormElement>}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full max-w-[781px]"
            >
              <h1 className="text-white text-[38px] md:text-[72px] font-bold ">
                <AnimatedText text="Get in touch" hero />
              </h1>
              <p className="text-white text-[18px] mt-[-16px]">
                We Really Can’t Wait To Hear From You!
              </p>
              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                className={`w-full py-[18px] px-5 rounded-lg border  ${
                  errors.user_name && touched.user_name
                    ? 'border-red-600 text-red-600'
                    : 'border-[#2F2F2F] text-white'
                } bg-[rgba(26,26,26,0.75)] `}
                onChange={handleChange}
                value={values.user_name}
              />
              {errors.user_name && touched.user_name && (
                <p className="text-red-600">{errors.user_name}</p>
              )}
              <input
                name="user_email"
                type="email"
                placeholder="Enter your email address"
                className={`w-full py-[18px] px-5 rounded-lg border ${
                  errors.user_email && touched.user_email
                    ? 'border-red-600 text-red-600'
                    : 'border-[#2F2F2F] text-white'
                } bg-[rgba(26,26,26,0.75)] text-white`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.user_email}
              />
              {errors.user_email && touched.user_email && (
                <p className="text-red-600">{errors.user_email}</p>
              )}
              <input
                name="user_phone"
                type="number"
                placeholder="Enter your phone number"
                className={`w-full py-[18px] px-5 rounded-lg border ${
                  errors.user_phone && touched.user_phone
                    ? 'border-red-600 text-red-600'
                    : 'border-[#2F2F2F] text-white'
                } bg-[rgba(26,26,26,0.75)] text-white`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.user_phone}
              />
              {errors.user_phone && touched.user_phone && (
                <p className="text-red-600">{errors.user_phone}</p>
              )}
              <textarea
                name="message"
                id=""
                cols={30}
                rows={10}
                placeholder="Go ahead we are listening"
                className={`w-full py-[18px] px-5 rounded-lg border ${
                  errors.message && touched.message
                    ? 'border-red-600 text-red-600'
                    : 'border-[#2F2F2F] text-white'
                } bg-[rgba(26,26,26,0.75)] text-white mb-2`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              ></textarea>
              {errors.message && touched.message && (
                <p className="text-red-600">{errors.message}</p>
              )}
              <div>
                <Button
                  text={isLoading ? 'Sending...' : 'Send Message'}
                  type="submit"
                  isLoading={isLoading}
                />
              </div>
            </form>
          )}
        </Formik>
        <div className="z-[1]" id="location">
          <Map />
        </div>
      </div>
      <Modal isOpen={isModalOpen} message={message} onClose={setIsModalOpen} />/
    </section>
  );
};
