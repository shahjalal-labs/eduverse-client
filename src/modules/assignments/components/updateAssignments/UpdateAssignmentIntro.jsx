const UpdateAssignmentIntro = ({ title, img }) => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg p-5 shadow-d mb-2 bg-base-100 hover-effect">
      <div className="flex justify-cente gap-3 items-center mb-4">
        <div className="w-[170px] max-lg:hidden">
          <img src={img} className="rounded-xl" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-primary mb-4">
            ✏️ Update: <span className="text-purple-500">{title}</span>
          </h2>
          <p className="text-sm leading-relaxed text-center max-w-2xl mx-auto">
            You're now editing an existing assignment. Make sure to carefully
            review and update the title, description, total marks, difficulty
            level, and due date. Once updated, the changes will reflect across
            the entire platform.
            <br className="hidden sm:block" />
            <span className="font-medium text-yellow-600 ">Tip:</span> Keep
            deadlines realistic and descriptions clear to help students
            understand expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignmentIntro;
