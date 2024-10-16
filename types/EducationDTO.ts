export interface EducationDTO {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | 'Present';
  description?: string;
}
