export interface CardServicesProps {
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}
export interface QuestionInterface {
  Question: string;
  Answer?: React.ReactNode;
}
export interface PanelProps {
  estado: boolean;
  setEstado: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface UserInterface {
  name: string | null;
  email: string | null;
  lastname: string | null;
  photo: string | null;
  iniciales: string | null;
}
export interface UpdateUserProps {
  task: any;
}
export interface FAQ {
  Question: string;
  Answer: string;
}

// Definición de las propiedades del componente AccordionQuest
export interface AccordionQuestProps {
  faqs: FAQ[];
}
