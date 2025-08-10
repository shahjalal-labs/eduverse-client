//for update default value not getting issue solve

import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { fetchData } from "../../../utils/fetchData";
import { useEffect, useState } from "react";
import Spinner from "../../shared/Layout/Spinner";
import ErrorMessage from "../../../utils/ErrorMessage";
import { useForm } from "react-hook-form";
import UpdateAssignmentForm from "../components/updateAssignments/UpdateAssignmentForm";
import updateData from "../../../utils/updateData";
import customAlert from "../../../utils/customAlert";
import UseHelmet from "../../../hooks/useHelmet";
import LottieAnimation from "../../../animation/LottieAnimation";
import { updateLottie, updateManLottie } from "../../../animation";
import UpdateAssignmentIntro from "../components/updateAssignments/UpdateAssignmentIntro";

const UpdateAssignment = () => {
  const {
    mutate: updateAssignment,
    isPending: isPendingForUpdate,
    error: errorForUpdate,
    isError: isErrorForUpdate,
  } = useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      customAlert({
        title: "Updated successfully!",
        text: "You have successfully updated the assignment!",
      });
      setTimeout(() => {
        navigate("/assignments");
      }, 2000);
    },
    onError: (err) => {
      console.log(err, "err inside onError");
    },
  });

  const { id } = useParams();
  const { data, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["assignments", "assignment", id],
    queryFn: () => fetchData(`assignments/${id}`),
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [prevAssignment, setPrevAssignment] = useState({});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Populate form after data load
  useEffect(() => {
    if (data?.data) {
      const loaded = data.data;
      setPrevAssignment(loaded);
      setSelectedDate(new Date(loaded.dueDate));
      reset({
        title: loaded.title,
        description: loaded.description,
        marks: loaded.marks,
        thumbnailUrl: loaded.thumbnailUrl,
        difficulty: loaded.difficulty,
      });
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    const updatedAssignment = {
      ...formData,
      dueDate: selectedDate,
    };

    updateAssignment({
      endpoint: `assignments/update-assignment/${id}`,
      body: updatedAssignment,
    });
  };

  return (
    <div className="mt-2 mb-14 mx-auto">
      <UseHelmet title="Update Assignment" />
      {isPending && <Spinner />}
      {isError && <ErrorMessage error={error} />}
      {isSuccess && (
        <div>
          <div className="w-[150px] mx-auto hover-effect mb-2 rounded-lg">
            <LottieAnimation anime={updateLottie} />
          </div>

          <UpdateAssignmentIntro
            title={prevAssignment?.title}
            img={prevAssignment?.thumbnailUrl}
          />

          <div className="lg:flex justify-around max-xl:gap-7 mt-5">
            <UpdateAssignmentForm
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              onSubmit={onSubmit}
              prevAssignment={prevAssignment}
              isPendingForUpdate={isPendingForUpdate}
              errorForUpdate={errorForUpdate}
              isErrorForUpdate={isErrorForUpdate}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />

            <div className="bg-base-200 rounded-xl shadow-lg w-full flex-center max-w-[500px] mx-auto max-lg:mt-9 hover-effect">
              <LottieAnimation anime={updateManLottie} />
            </div>
          </div>
        </div>
      )}
      {isErrorForUpdate && <ErrorMessage error={errorForUpdate} />}
    </div>
  );
};

export default UpdateAssignment;
