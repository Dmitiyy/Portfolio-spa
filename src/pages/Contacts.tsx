import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

interface MyFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactsPage = () => {
  const initialValues: MyFormValues = { name: '', email: '', message: '' };
  const [isThankShow, setIsThankShow] = useState<Boolean>(false);

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required()
  });

  return (
    <div className="content">
      <div className="contacts">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            const message = `Name: ${values.name}%0AEmail: ${values.email}%0AMessage: ${values.message}`;

            const telegramUrl: string = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_CHAT_ID}&text=${message}&parse_mode=markdown`;

            fetch(telegramUrl)
              .then(() => {
                setIsThankShow(true);
                actions.resetForm();
                setTimeout(() => {setIsThankShow(false)}, 3000);
              });
          }}>
          {
            ({errors, touched}) => (
              <Form className="contacts__form">
                <label htmlFor="name">Name</label>
                <Field className="form-input" type="text" id="name" name="name" 
                style={{border: errors.name && touched.name ? '2px solid #9e5151' : 'none'}} />
                <label htmlFor="email">Email</label>
                <Field className="form-input" type="email" id="email" name="email"
                style={{border: errors.email && touched.email ? '2px solid #9e5151' : 'none'}} />
                <label htmlFor="message">Message</label>
                <Field component='textarea' className="form-input" name="message" id="message"
                style={{border: errors.message && touched.message ? '2px solid #9e5151' : 'none'}} />
                <div className="wrap__btns">
                  <button type="submit">Submit</button>
                  <p className="form-successful"
                  style={{display: isThankShow ? 'inline' : 'none'}}>Thank you! I will contact you soon</p>
                </div>
              </Form>
            )
          }
        </Formik>
        <div className="contacts__text">
          <h2>CONTACT FORM</h2>
          <p>You can send me your letter and i will answer you soon. For it you have to fill this form. It is totally free.</p>
          <p>You don’t have to see the whole staircase, just take the first step. Good luck!</p>
        </div>
      </div>
    </div>
  )
}
export default ContactsPage;