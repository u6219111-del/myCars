

import { supabase } from "./supabaseClient"


export const getCars = async () => {
  const { data: cars, error } = await supabase
    .from('Cat')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6)

  if (error) {
    console.error('Ошибка при получении машин:', error);
    return [];
  }
  console.log('CARS:',cars)
  return cars;
}

// getCars(); // Comment out the immediate execution