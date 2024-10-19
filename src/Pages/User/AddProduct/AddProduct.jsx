import { useNavigate } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import Navbar from "../../../Components/Navbar/Navbar";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import { message } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storageDB } from "../../../Utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

function AddProduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      if (!data.img || data.img.length === 0) {
        message.error("please upload an Image ");
        return;
      }

      const file = data.img[0];

      const storageRef = ref(storageDB, `products/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      //    Step 2: Add document to Firestore

      const productCollectionRef = collection(db, "products");
      console.log("data=>", data);

      const obj = {
        ...data,
        img: downloadURL,
        createdAt: serverTimestamp(),
        createdBy: auth.currentUser.uid,
        status: "active",
        category: data.category,
      };
      await addDoc(productCollectionRef, obj);
      reset();
      message.success("Product Added Successfully");
      setLoading(false)
      navigate("/shop");
    } catch (error) {
      console.log("error=>", error);
      setLoading(false)
      message.error("Error in adding product!");
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product NAme  */}

        <Input
          placeholder={"Product title"}
          obj={{ ...register("title", { required: true, maxLength: 50 }) }}
          errorMsg={"Text Length should be 30"}
          formKey={"title"}
          errors={errors}
        />

        {/* product price  */}
        <Input
          placeholder={"Product Price"}
          obj={{ ...register("price", { required: true }) }}
          errorMsg={"Price is required"}
          formKey={"price"}
          type={"number"}
          errors={errors}
        />

        <Input
          placeholder={"Product Description"}
          obj={{ ...register("desc", { required: true }) }}
          errorMsg={"Description is required"}
          formKey={"desc"}
          errors={errors}
        />

        <Input
          placeholder={"Product Image"}
          obj={{ ...register("img", { required: true }) }}
          errorMsg={"Image is required"}
          formKey={"img"}
          type={"file"}
          errors={errors}
        />

        {/* <Input
          placeholder={"Product Category"}
          obj={{ ...register("category", { required: true }) }}
          errorMsg={"Category is required"}
          formKey={"category"}
          errors={errors}
        /> */}
        <Input
  placeholder={"Product Category"}
  obj={{ ...register("category", { required: true }) }}
  errorMsg={"Category is required"}
  formKey={"category"}
  type="select" // Specify it's a dropdown
  options={["food", "Medicine", "Accessories"]} // Add the options
  errors={errors}
/>

        <div className="btn-container">
          <button type="submit"  disabled={loading}> {loading ? "Submitting..." : "Submit"}</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
