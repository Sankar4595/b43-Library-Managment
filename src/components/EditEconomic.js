/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import BaseDefault from '../core/base';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as yup from "yup";
import { useFormik } from "formik";

const formValidationSchema = yup.object({

  id: yup.number().positive().required("Please enter valid ID"),
  img: yup.string().url().required("Please Only Enter Valid URL"),
  book: yup.string().required("Please Enter Book Name"),
  author: yup.string().required("Please Enter Author Name"),
  year: yup.string().required("Please Enter Year"),
  des: yup.string().required("Please Enter Description with min 10 Characters").min(10),
    
});

const EditEconomic = ({eco,setEco,newItem}) => {

  const {id} = useParams();

  const selectBook = eco.find((data)=>data.id ===id);

  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    
  useFormik({
    initialValues: {
      id: selectBook.id,
      img: selectBook.img,
      book: selectBook.book,
      author: selectBook.author,
      year: selectBook.year,
      des: selectBook.description,
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      updatebook(values);
    },
  });

  const updatebook = (val) => {
    const editedIndex = eco.findIndex((data) => data.id === id);
    eco[editedIndex] = val;
    setEco([...eco]);
    newItem.push("/economic");
  };
  return (
    <BaseDefault
    styles="title"
    title={`${values.book} Book : Author of${values.author}`}
    >
      <form className="new-book" onSubmit={handleSubmit}>

        <TextField id="outlined-basic" 
        onChange={handleChange}
        onBlur={handleBlur}
        name = "id"
        value={values.id}
        error={touched.id && errors.id}
        helperText={touched.id && errors.id ? errors.id : null}
        type="tel" label="Id" variant="outlined" 
        />

        <TextField id="outlined-basic"
        onChange={handleChange}
        onBlur={handleBlur}
        name = "img"
        value={values.img}
        error={touched.img && errors.img}
        helperText={touched.img && errors.img ? errors.img : null}
        type="text" label="Image" variant="outlined" 
        />

        <TextField id="outlined-basic"
        onChange={handleChange}
        onBlur={handleBlur}
        name = "book"
        value={values.book}
        error={touched.book && errors.book}
        helperText={touched.book && errors.book ? errors.book : null}
        type="text" label="Book" variant="outlined" 
        />

        <TextField id="outlined-basic"
        onChange={handleChange}
        onBlur={handleBlur}
        name="author"
        value={values.author}
        error={touched.author && errors.author}
        helperText={touched.author && errors.author ? errors.author : null}
        type="text" label="Author" variant="outlined" 
        />

        <TextField id="outlined-basic"
        onChange={handleChange}
        onBlur={handleBlur}
        name = "year"
        value={values.year}
        error={touched.year && errors.year}
        helperText={touched.year && errors.year ? errors.year : null}
        type="tel" label="Year" variant="outlined" 
        />

        <TextField id="outlined-basic"
        onChange={handleChange}
        onBlur={handleBlur}
        name = "des"
        value={values.des}
        error={touched.des && errors.des}
        helperText={touched.des && errors.des ? errors.des : null}
        type="text" label="Description" variant="outlined" 
        />

        <Button type="submit">Submit</Button>

      </form>
    </BaseDefault>
  );
}

export default EditEconomic;
