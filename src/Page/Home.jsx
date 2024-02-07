import InputForm from "../components/InputForm";
import ProductsContainer from "../components/ProductsContainer";



const Home = () => {
    return (
      
            <div>
     
        <main className="py-16">
          <div className="productWrapper">
            {/* products container */}
           <ProductsContainer/>
            {/* products container ends */}
           <InputForm/>
          </div>
        </main>
      </div>
        
    );
};

export default Home;