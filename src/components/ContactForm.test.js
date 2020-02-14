import React from 'react';
import { render, getByDisplayValue, getByTestId, getByLabelText, getByText, fireEvent, waitForElement } from '@testing-library/react';
import ContactForm from './ContactForm';

test('first name, last name, email, message are rendered', async () => {
   const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/firstname/i);
    getByLabelText(/lastname/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
    });

    
    test('form submit  adds new user to the list', async () => {

        const { getByTestId, getByLabelText } = render(<ContactForm />);
        const firstNameInput = getByLabelText(/first name/i);
        const lastNameInput = getByLabelText(/last name/i);
        const emailInput = getByLabelText(/email/i);
        const messageInput = getByLabelText(/message/i);

        //  const { getByTestId, rerender } = render(<ContactForm />);
        //   const firstNameInput = getByTestId('first name');
        //  const lastNameInput = getByTestId('last name');
        // const emailInput = getByTestId('email');
        //  const messageInput = getByTestId('message');

        fireEvent.change(firstNameInput, { target: { value: 'Test First Name'} })
        fireEvent.change(lastNameInput, { target: { value: 'Test Last Name'} })
        fireEvent.change(emailInput, { target: { value: 'Test email'} })
        fireEvent.change(messageInput, { target: { value: 'message'} })
        fireEvent.click(getByTestId(/submit/i))


        await waitForElement(() => getByTestId(/testing/i))

    });


