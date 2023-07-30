import React from 'react';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Aboutus from '../components/Aboutus';
import Investor from '../components/Investor';
import ProdOne from '../components/ProdOne';
import ProdTwo from '../components/ProdTwo';
import ProdThree from '../components/ProdThree';
import Seo from '@/components/Seo';

function App() {
  return (
    <div className="w-full h-full webColor relative">
      <Seo />
      <Navbar />
      <Home />
      <Products />
      <ProdOne />
      <ProdTwo />
      <ProdThree />
      <Investor />
      <Aboutus />

      <div className="bg-[#173D28]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
