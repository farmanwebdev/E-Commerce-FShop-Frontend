import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/actions/products-actions";
import TheSpinner from "../../layout/TheSpinner";
import { Navigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  // FIXED typo: addPrductLoading → addProductLoading (check your store)
  const loading = useSelector((state) => state.ui.addProductLoading);

  const [tnail, setTnail] = useState("");
  const [pImages, setPImages] = useState([]);

  const thumbnailHandler = (file) => {
    setTnail(file);
  };

  const imagesHandler = (event) => {
    const imageArray = [];

    for (let i = 0; i < event.target.files.length; i++) {
      imageArray.push(event.target.files[i]);
    }

    setPImages(imageArray);
  };

  const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    shipping: false,
    sku: "BlkjdfKj23jrdfkj1",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
      brand: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("thumbnail", tnail);

      for (let i = 0; i < pImages.length; i++) {
        formData.append("images[]", pImages[i]);
      }

      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("category", values.category);
      formData.append("brand", values.brand);
      formData.append("sku", values.sku);

      formData.append("shipping", values.shipping ? 1 : 0);

      const payload = {
        product: formData,
        token,
      };

      try {
        // ✅ FIXED SYNTAX ERROR HERE
        await dispatch(addProduct(payload));

        formik.resetForm();

        swal({
          title: "Product Created!",
          text: `Product: ${values.name} CREATED!`,
          icon: "success",
          button: "OK!",
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <div className="flex items-center mx-4 my-8 p-8 bg-white shadow-2xl drop-shadow-md">
        <span className="text-4xl text-primary mr-6">
          <IoMdAddCircle />
        </span>

        <h2 className="uppercase text-4xl tracking-widest font-semibold">
          Add product
        </h2>
      </div>

      <div className="flex m-4 p-8 bg-white shadow-lg">
        <div className="w-3/4">
          <form onSubmit={formik.handleSubmit}>
            {/* your inputs remain same */}

            {loading ? (
              <TheSpinner />
            ) : (
              <button
                type="submit"
                className="px-4 py-2 block mt-3 ml-auto text-primary border border-primary hover:text-white hover:bg-primary rounded-md"
              >
                Create Product
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;