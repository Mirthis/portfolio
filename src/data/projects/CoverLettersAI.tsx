const CoverLettersAI = () => {
  return (
    <>
      <p>
        This was my first experiment of integrating openAI GPT-3 into a web app,
        and basic idea behind what later became SmartApply.
      </p>
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        Features
      </h2>
      <ul>
        <li>
          Instantly generate a cover letter based on job title and job
          description
        </li>
        <li>
          Optional company details and applicant experience are used to
          personalize the output
        </li>
        <li>User authentication via Twitter and Google</li>
        <li>Browse previously generated letters</li>
        <li>Save personal details in profile to be used in future letters</li>
      </ul>
    </>
  );
};

export default CoverLettersAI;
