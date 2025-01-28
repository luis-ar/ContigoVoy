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