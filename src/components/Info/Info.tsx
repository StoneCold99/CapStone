import _React from 'react';

export const Info = () => {
  const imageUrl = 'https://th.bing.com/th/id/R.91edca9a64c7a1a25f8defd21688c16d?rik=V390u9gvtBOHJA&pid=ImgRaw&r=0';
  const imageUrl2 ='http://heartsunitedfun.org/uploads/1/2/0/9/120929852/35660823-848422428688740-3924805531004305408-n_orig.jpg'

  return (
    <div className="info-container" style={{ display: 'flex', backgroundColor: 'lightgrey', padding: '20px' }}>
      <div className="image-container" style={{ marginRight: '20px' }}>
        <img src={imageUrl} alt="Info Image" style={{ maxWidth: '100%',maxHeight:'100%',  borderRadius: '2px' }} />
        <img src={imageUrl2} alt= 'Info Image' style={{maxWidth:'100%', maxHeight:'100%', }}/>
      </div>
      <div className="text-container">
        <h1>🌟 Join Hands, Touch Hearts: Donate to Hearts United Foundation! 🌟</h1>
        <h2> 🌟 Donate Now Through Zelle @ [nrz1970@aol.com]</h2>
        <h2>- Who Are We ❤️: </h2>
        <p>Hearts United, is an organization that provides low-income families in 3rd world countries with the resources and skills that will empower them to be successful and catalyst members of their communities through education, medical, and nutritional assistance. We wish to create a community that is self-sufficient in and of themselves with very limited assistance from outside organizations. By doing this "Hearts United Foundation" makes a difference in the lives of these families in Latin America by providing a way out of the poverty that has enslaved them so long. God has placed this vision in our hearts, and he has made the need of these families so tangible in our spirits that we can no longer ignore their suffering and wish to act on the desire God has placed within us.</p>
        <h2>-Your Donation Makes a Difference ❤️ :</h2>
        <p>Every dollar you contribute goes directly to initiatives that touch hearts, change circumstances, and create a brighter tomorrow. From providing education to the underprivileged to offering healthcare to those in need, your donation is the key to unlocking a world of possibilities.</p>
        <h2>- How You Can Help 🤲: </h2>
        <p> * Donate Today: Your one-time or monthly donation paves the way for positive change.</p>
        <p> * Spread the Word: Share our mission with friends and family, amplifying the reach of our collective impact. </p>
        <p> * Volunteer: Join our community of volunteers, contributing your time and skills to make a lasting difference. </p>
      </div>
      <div className="footer">
        <p>&copy; 2016 Hearts United Foundation. All rights reserved.</p>
      </div>
    </div>
  );
};




