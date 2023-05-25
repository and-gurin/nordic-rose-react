import React from 'react';
import style from './Newsletter.module.scss'
import {useFormik} from "formik";
import {nordicAPI} from "api/api";

export function Newsletter() {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            nordicAPI.saveEmail(values).then(res => {
                formik.resetForm()
                })
        },
    })

    return (
        <section className={style.newsletter}>
            <h5 className={style.newsletter__title}>
                Sign up for the newsletter
            </h5>
            <p className={style.newsletter__subtitle}>
                If you want relevant updates occasionally, sign up for the private newsletter. Your email is never
                shared.
            </p>
            <form onSubmit={formik.handleSubmit} className={style.newsletter__form}>
                <input className={style.newsletter__input}
                       name="email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       onBlur={formik.handleBlur}
                       placeholder="Enter your email..."/>
                <button className={style.newsletter__button} type={'submit'}>Sign Up</button>
            </form>
            {formik.touched.email && formik.errors.email
                ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
        </section>
    );
}