import React from 'react';

// Styles
import FormWrap from './styles';

const Form = () => (
  <FormWrap className="text-center">
    <div
      id="form-wrap"
      class="d-flex align-items-center justify-content-center text-center"
    >
      <form name="contact" method="POST" data-netlify="true" class="p-4">
        <div class="form-groups">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Name:"
              required
            />
          </div>

          <div class="form-group">
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email:"
              required
            />
          </div>

          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              placeholder="Message:"
              required
            />
          </div>

          <div class="form-group pt-4">
            <small id="emailHelp" class="form-text text-muted">
              Your email won't be shared with anyone.
            </small>
          </div>

          <div class="form-group">
            <button class="btn btn-primary my-4 d-block mx-auto" type="submit">
              Submit
            </button>
            <button
              id="close-form"
              class="btn btn-link btn-sm text-muted d-block mt-4 mx-auto"
            >
              <small>Close</small>
            </button>
          </div>
        </div>
      </form>
    </div>
  </FormWrap>
);

export default Form;
