import { supabase } from "./supabaseClient";

export const getCarss = async () => {
  const { data: cars, error } = await supabase
    .from("Cat")
    .select("*")

    .order("created_at", { ascending: false });

  if (error) {
    console.error("Ошибка при получении машин:", error);
    return [];
  }

  return cars;
};
