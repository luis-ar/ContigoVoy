"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import interactionPlugin from "@fullcalendar/interaction";
import { ScrollArea } from "@/components/ui/scroll-area";

const PageCalendario = () => {
  const handleDateClick = (arg: any) => {
    alert(arg.dateStr);
  };
  return (
    <ScrollArea className="h-[calc(100vh-18vh)] overflow-y-auto px-6">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={[esLocale]}
        locale="es"
        dateClick={handleDateClick}
        events={[
          { title: "event 1", date: "2025-02-01" },
          { title: "event 2", date: "2025-02-02" },
          { title: "event 3", date: "2025-02-02" },
        ]}
      />
    </ScrollArea>
  );
};

export default PageCalendario;
