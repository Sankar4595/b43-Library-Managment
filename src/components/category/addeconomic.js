import {TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import BaseDefault from "../../core/base";
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

export default function AddEconomic({eco,setEco,newItem}){

    const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    
    useFormik({
      initialValues: {
        id: "",
        img: "",
        book: "",
        author: "",
        year: "",
        des: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        addbook(values);
      },
    });

    const addbook = async (values) => {
    await setEco([...eco, values]);
    newItem.push("/economic");
    };

    return(
        <BaseDefault
            title="Add a New Book"
            styles="title"
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
    )
}