import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import { productsContext } from "../contexts/ShopContext";

const AddProduct = (id, setProductId) => {
  const { addProducts } = useContext(productsContext);
  // fb
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [imageBlack, setImageBlack] = useState(null);
  const [imageWhite, setImageWhite] = useState(null);
  const [imageBlue, setImageBlue] = useState(null);
  const [imageRed, setImageRed] = useState(null);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Firebase starts

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      model === "" ||
      price === "" ||
      description === "" ||
      type === "" ||
      imageBlack === "" ||
      imageWhite === "" ||
      imageBlue === "" ||
      imageRed === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }
    const newProduct = {
      model,
      price,
      description,
      type,
      imageBlack,
      imageWhite,
      imageBlue,
      imageRed,
    };
    console.log(newProduct);
    // if (title !== "") {
    //   await addDoc(collection(db, "products"), {
    //     title,
    //     completed: false,
    //   });
    //   setTitle("");
    // }
  };

  // Firebase ends
  function save(newProduct) {
    addProducts({ ...newProduct, comments: [], likes: [], ratings: [] });
    setIsModalVisible(false);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button style={{ marginTop: "10px" }} type="primary" onClick={showModal}>
        Add a product
      </Button>
      <Modal
        footer={null}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          initialValues={{ remember: false }}
          layout="vertical"
          name="basic"
          onFinish={save}
          //Fb
          // onSubmit={handleSubmit}
          //Fb
        >
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input model!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input model!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
            rules={[
              {
                required: true,
                message: "Please input female or male!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="image black"
            name="imageBlack"
            rules={[
              {
                required: true,
                message: "Please input URL of black images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image white"
            name="imageWhite"
            rules={[
              {
                required: true,
                message: "Please input URL of white images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image blue"
            name="imageBlue"
            rules={[
              {
                required: true,
                message: "Please input URL of blue images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image red"
            name="imageRed"
            rules={[
              {
                required: true,
                message: "Please input URL of red images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
