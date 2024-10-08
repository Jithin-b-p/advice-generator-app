import { useEffect, useState } from "react";

function AdvicePreview() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    async function apiCall() {
      try {
        const res = await fetch();

        const { slip } = await res.json();
        console.log(slip);
      } catch (error) {
        console.log(error);
      }
    }

    apiCall();
  }, []);
  return (
    <div className="bg-custNeutral-200 max-w-[25rem] text-center flex flex-col items-center p-5 rounded-xl">
      <span className="text-primary-neonGreen">Advice 102</span>
      <p className="text-primary-lightCyan">
        "It is easy to sit up and take notice. What's difficult is getting up
        and taking action."
      </p>
      <img src="/images/pattern-divider-desktop.svg" alt="pattern" />
    </div>
  );
}

export default AdvicePreview;
