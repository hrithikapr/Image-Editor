import React from 'react';
import Base from './Base';
import './Home.css';

const Home = () => {
    return (
        <>
            <section id="header2" className="container-fluid">

                <Base name="Edit your photos and make your own filters with"
                    imgsrc={"https://www.online-image-editor.com/styles/2019/images/power_girl.png"}
                    visit="/editor"
                    btname="Get Started" />

                <div className='container'>
                    <div className="row ticks">
                        <div className="col-md-4 pt-2 pt-lg-0 order-2 order-lg-1 ">
                            <h4> <i class="fas fa-check text-info"></i> Free forever</h4>
                            <h6 className="my-3">Use your all-in-one editor for free - no strings attached!</h6>
                        </div>
                        <div className="col-md-4 pt-2 pt-lg-0 order-2 order-lg-1 ">
                            <h4> <i class="fas fa-check text-info"></i> Custom Filters</h4>
                            <h6 className="my-3">Create your own customized filters for your photos</h6>
                        </div>
                        <div className="col-md-4 pt-2 pt-lg-0 order-2 order-lg-1 ">
                            <h4><i class="fas fa-check text-info"></i> 100+ million images</h4>
                            <h6 className="my-3">Hundreds of photos, stickers, filters and other contents</h6>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="row my-5">
                            <div className="col-md-4 mx-auto">
                                <img src="http://pluspng.com/img-png/editor-png-image-editing-512.png" width={"200px"} alt="img" />
                            </div>
                            <div className="col-md-7">
                                <h4>Creative Content</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus similique optio, sapiente quam rerum quisquam iste soluta ipsa earum omnis amet ratione? Velit aut quae ea rem molestiae, reprehenderit vitae laborum ipsa, minus ex error culpa accusantium iusto autem deleniti consequatur sapiente ab laudantium quasi dicta. Ratione suscipit, reiciendis dolor delectus inventore, dicta architecto modi dolorum, ipsum asperiores itaque.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7 ">
                                <h4>Tell Your Story Your Way</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus similique optio, sapiente quam rerum quisquam iste soluta ipsa earum omnis amet ratione? Velit aut quae ea rem molestiae, reprehenderit vitae laborum ipsa, minus ex error culpa accusantium iusto autem deleniti consequatur sapiente ab laudantium quasi dicta. Ratione suscipit, reiciendis dolor delectus inventore, dicta architecto modi dolorum, ipsum asperiores itaque.</p>
                            </div>
                            <div className="col-md-4 mx-auto">
                                <img src="http://pluspng.com/img-png/editor-png-image-editing-512.png" width={"200px"} alt="img" />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-4 mx-auto">
                                <img src="http://pluspng.com/img-png/editor-png-image-editing-512.png" width={"200px"} alt="img" />
                            </div>
                            <div className="col-md-7 mb-5">
                                <h4>Elevate Imagery With Filters and Effects</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus similique optio, sapiente quam rerum quisquam iste soluta ipsa earum omnis amet ratione? Velit aut quae ea rem molestiae, reprehenderit vitae laborum ipsa, minus ex error culpa accusantium iusto autem deleniti consequatur sapiente ab laudantium quasi dicta. Ratione suscipit, reiciendis dolor delectus inventore, dicta architecto modi dolorum, ipsum asperiores itaque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home