import React from "react";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaDollarSign } from "react-icons/fa";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/actions/products-actions";
import swal from "sweetalert";
import TheSpinner from '../../layout/TheSpinner';

const ProductUpdate = () => {

  const { productId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const { product } = location.state;

  const token = useSelector((state) => state.auth.token);

  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const loading = useSelector((state) => state.ui.updateProductLoading);

  const dispatch = useDispatch();

  // ✅ Hook runs always
  const formik = useFormik({

    initialValues: {

      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      shipping: product.shipping,
      sku: product.sku,

    },

    validationSchema: Yup.object({

      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
      brand: Yup.string().required("Required"),

    }),

    onSubmit: async (values) => {

      try {

        await dispatch(updateProduct({
          product: values,
          id: productId,
          token
        }));

        swal({

          title: "Product Updated!",
          text: `Product: ${values.name} UPDATED!`,
          icon: "success",
          button: "OK!",

        });

      } catch (error) {

        console.log(error);

      }

    },

  });

  // ✅ Redirect AFTER hook
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>

      {/* UI remains same */}

      {loading ? (
        <TheSpinner />
      ) : (
        <button
          type="submit"
          className="px-4 py-2 block my-12 ml-auto font-bold uppercase text-secondary-100 border border-secondary-100 hover:text-white hover:bg-secondary-100 rounded-md"
        >
          Update Product
        </button>
      )}

    </div>
  );
};

export default ProductUpdate;