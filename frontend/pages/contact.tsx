import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useState } from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi'


interface FormData {
  name: string;
  email: string;
  message: string;
  subject:string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  subject:""

  });

  
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setStatus('Message sent successfully!');
      console.log(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus('An unknown error occurred');
      }
    }
  };
  return (
    <>
      <PageTemplate title='الاتصالات - Codex-Tech'>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-right">
              <PageSentence
                title="نحن نحب تلقي الرسائل منكم، ونحن في انتظارها."
                badge="التواصل"
              />
            </div>
            <div className="space-y-6">
              <IconListItem
                label="الهاتف"
                icon={<FiPhoneCall />}
                value="+201271138683"
              />
              <IconListItem
                label="البريد الاكتروني "
                icon={<FiMail />}
                value="ibrahimshoeib255@gmail.com"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="الاسم" onChange ={handleChange} defaultValue={formData.name} />
                <InputGroup label="البريد الاكتروني" onChange ={handleChange}    defaultValue={formData.email} />
              </div>
              <InputGroup label="الموضوع" onChange ={handleChange}  defaultValue={formData.subject}/>
              <TextAreaGroup label="تفاصيل الرساله" onChange ={handleChange} defaultValue={formData.message}/>
              <Button value="ارسال " onClick={handleSubmit}/>
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
