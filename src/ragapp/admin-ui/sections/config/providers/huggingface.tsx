import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { PasswordInput } from "@/components/ui/password-input";
  import { UseFormReturn } from "react-hook-form";
  import { ModelForm } from "./shared";
  
  export const HFForm = ({
    form,
    defaultValues,
  }: {
    form: UseFormReturn;
    defaultValues: any;
  }) => {
    const supportingModels = ["llama3-8b", "llama3-70b", "mixtral-8x7b"];
  
    return (
      <>
        <FormField
          control={form.control}
          name="hugginface_model_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Huggingface model name (*)</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={defaultValues.openai_api_key ?? "sk-xxx"}
                  showCopy
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Specify a model name available on hugginface.co
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ModelForm
          form={form}
          defaultValue={defaultValues.model}
          supportedModels={supportingModels}
        />
      </>
    );
  };
  