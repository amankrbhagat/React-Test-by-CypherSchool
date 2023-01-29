import React from 'react';
import image1 from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F646759196460924114%2F&psig=AOvVaw1csr0enY7edaKkILJJ377W&ust=1675059981423000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIi6l-uS7PwCFQAAAAAdAAAAABAE'
import image2 from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fjackets%2Froadster%2Froadster-men-blue-washed-denim-jacket%2F12288700%2Fbuy%3Futm_source%3Dperf_google_pla%26utm_medium%3Dperf_google_pla%26utm_campaign%3Dpla-smartshopping-top-category%26gclid%3Dcjwkcajwjbcdbhaweiwaiudby84qyiji9ratqxt1-e4flheta768ci_06lvie1zdxc-acqnygms_brocagyqavd_bwe&psig=AOvVaw164jzg5-sTSIQf9ZzoCA4K&ust=1675060049896000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjU2ouT7PwCFQAAAAAdAAAAABAM'
import image3 from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FHush-Puppies-Stark-Leather-Formal%2Fdp%2FB09X12N5CC&psig=AOvVaw0UmjKhnMZKgHJ82nyUmxGi&ust=1675060113709000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDflqqT7PwCFQAAAAAdAAAAABAE'
import image4 from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthehazelavenue.com%2Fproducts%2Fathens-mesh-skirt&psig=AOvVaw2Y5DzLMuUrDBaZjf9v5yB_&ust=1675060168729000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCKvcST7PwCFQAAAAAdAAAAABAJ'
import Card from './components/Card';

function App() {
  return (
    <div className='card-container'>
      <Card image={image1} title='Card 1'/>
      <Card image={image2} title='Card 2'/>
      <Card image={image3} title='Card 3'/>
      <Card image={image4} title='Card 4'/>
    </div>
  );
}

export default App;