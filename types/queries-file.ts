/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Data
// ====================================================

export interface Data_drivers {
  __typename: "drivers";
  first_name: string;
  last_name: string;
  updated_at: any;
  car_number: string;
  birthday: any | null;
  car_image: string | null;
  car_image_attr: string | null;
  chassis: string | null;
  created_at: any;
  driver_image: string | null;
  facebook: string | null;
  hometown_city: string | null;
  hometown_state: string | null;
  id: number;
  instagram: string | null;
  team: string | null;
  twitter: string | null;
  website: string | null;
  primary_bg_color: string | null;
  secondary_text_color: string | null;
}

export interface Data_series {
  __typename: "series";
  id: number;
  count: number;
  created_at: any;
  facebook: string | null;
  instagram: string | null;
  schedule: string | null;
  series_logo: string | null;
  series_name: string;
  twitter: string | null;
  updated_at: any;
  website: string | null;
}

export interface Data {
  /**
   * fetch data from the table: "drivers"
   */
  drivers: Data_drivers[];
  /**
   * fetch data from the table: "series"
   */
  series: Data_series[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
