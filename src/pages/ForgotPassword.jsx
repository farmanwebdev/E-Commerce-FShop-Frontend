import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import TheSpinner from "../layout/TheSpinner";
import api from '../utils/api';

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: .3 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
};

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.loginLoading);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        dispatch(uiActions.setLoginLoading(true));
        const response = await api.post("/auth/forgot-password", values);
        
        if (response.data.success) {
          dispatch(uiActions.showNotification({
            type: 'success',
            message: 'Password reset link sent to your email!'
          }));
          formik.resetForm();
        } else {
          dispatch(uiActions.showNotification({
            type: 'error',
            message: response.data.message || 'Something went wrong'
          }));
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error.response?.data?.message || 'Failed to send reset link. Please try again.';
        dispatch(uiActions.showNotification({
          type: 'error',
          message: errorMessage
        }));
      } finally {
        dispatch(uiActions.setLoginLoading(false));
      }
    },
  });

  return (
    <motion.div className="w-[80%] mx-auto mt-40 mb-52"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-[320px] sm:w-[400px] rounded shadow-xl border-2 border-solid px-4 sm:px-8 py-20 mx-auto">
        <h2 className="text-3xl uppercase tracking-wider font-bold text-center mb-4 select-none">
          <span className="text-primary-600">F-</span>
          <span className="text-primary-800">Shop</span>
        </h2>
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Reset Password</h3>
        <p className="text-center text-gray-600 text-sm mb-8">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        
        {loading ? <TheSpinner /> : 
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col space-y-1 mb-6">
            <label htmlFor="email" className="font-semibold tracking-wider">
              Email Address
            </label>
            <div className="flex py-1">
              <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                <MdEmail />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="form-input rounded-r w-full"
                placeholder="example@domain.com"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-xs font-semibold text-red-600">
                {formik.errors.email}
              </p>
            )}
          </div>
          <hr />
          <button
            type="submit"
            className="w-full px-6 py-3 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>
        }
        
        <div className="mt-8 text-center">
          <Link to='/login' className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors">
            <FiArrowLeft />
            Back to Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
