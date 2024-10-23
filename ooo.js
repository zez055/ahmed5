document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    alert(`تم الحجز في ${location} بسعر ${price} جنيه.`);
});
