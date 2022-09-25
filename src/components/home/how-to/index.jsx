import CodeExample from "./code-example";
import { homePageExampleJs, homePageExampleFlutter } from "../../../examples/snippets/how-to";

const HowTo = () => {
    return (
        <>
            <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-left text-gray-800">
          How To
        </h1>
        <div className="w-[100px] mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Scheduling Emails Easily
            </h3>
            <p className="text-gray-600 mb-8">
              This is actually a test still building till stability
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="src/assets/images/code_examples/flutter.png" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="src/assets/images/code_examples/javascript.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Start Scheduling Now
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default HowTo;

/* <CodeExample rotation={'rotate-6 hover:rotate-0'} example={homePageExampleJs} type={'js'}/> */
                    // <CodeExample rotation={'-rotate-6 hover:rotate-0'} example={homePageExampleFlutter} type={'dart'}/>