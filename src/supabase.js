import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qfhukdkmccsnhmdvdeyj.supabase.co";
const supabaseKey = "sb_publishable_foKyRl-tZPEvu3OPYGa_xA_M18xUbt9";

export const supabase = createClient(supabaseUrl, supabaseKey);
