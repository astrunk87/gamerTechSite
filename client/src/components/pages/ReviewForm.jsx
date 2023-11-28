import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_TECH } from '../../utils/queries';

const ReviewForm = ({techId, tech, title}) => {
  const [reviews, setReview] = useState('');

  const [addReview, { error }] = useMutation(ADD_REVIEW, {refetchQueries:[QUERY_TECH]});

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("test", techId, reviews)
      const { data } = await addReview({
        variables: { techId, review:reviews },
      });

      setReview('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* <h4>Add your comment below</h4> */}
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit} >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your Review"
            value= {reviews}
            className="form-input w-100"
            onChange={(event) => setReview(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Review
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;