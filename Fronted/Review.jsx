
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Review() {
  const { workerId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ rating: 5, comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const review = { ...formData, workerId, customerName: currentUser?.name };
    
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    alert('Review submitted successfully!');
    navigate('/workers');
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '2rem' }}>
      <div className="card">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Rating</label>
            <select className="form-input" value={formData.rating} 
              onChange={(e) => setFormData({...formData, rating: e.target.value})}>
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Comment</label>
            <textarea className="form-input" rows="4" placeholder="Share your experience" 
              value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default Review;
