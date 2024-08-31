import React, { Suspense } from "react";
import ScheduleView from "../components/ScheduleView";

const ScheduleViewPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScheduleView />
    </Suspense>
  );
};

export default ScheduleViewPage;