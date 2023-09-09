import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './FormularioContacto.css';

class FormularioContacto extends React.Component {
    render() {
        return (
            <div>
                <p className='p-contact'>CONTACT</p>
                <Formik
                    initialValues={{ nombre: "", correo: "", mensaje: "" }}
                    validate={values => {
                        let errors = {};
                        if (values.nombre === "") {
                            errors.nombre = "Name is required";
                        }
                        if (values.correo === "") {
                            errors.correo = "Email is required";
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
                            errors.correo = "Email format is incorrect";
                        }
                        if (values.mensaje === "") {
                            errors.mensaje = "Message is required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        alert("Form validated and sent successfully");
                        values.nombre = "";
                        values.correo = "";
                        values.mensaje = "";
                        setSubmitting(false);
                    }}
                >
                    {(touched, errors, isSubmitting) => (
                        <Form>
                            {(
                                <div id="feedback-form">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Name</label>
                                        <Field
                                            type="text"
                                            name="nombre"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="nombre"
                                            className={`form-control ${touched.nombre && errors.nombre ? "is-invalid" : ""
                                                }`}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="correo">Email</label>
                                        {/* Los componentes extra como los "Field" se encargan de sincronizar
         el estado de Formik con los "value" de los "inputs" */}
                                        <Field
                                            type="email"
                                            name="correo"
                                            className={`form-control ${touched.correo && errors.correo ? "is-invalid" : ""
                                                }`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="correo"
                                            className="invalid-feedback"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mensaje">Message</label>
                                        <Field
                                            type="text"
                                            name="mensaje"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="mensaje"
                                            className={`form-control ${touched.mensaje && errors.mensaje ? "is-invalid" : ""
                                                }`}
                                        />
                                    </div>

                                    <button type="submit" disabled={isSubmitting}>
                                        SENT
                                    </button>
                                    <br />
                                </div>
                            )}

                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default FormularioContacto;