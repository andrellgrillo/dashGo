import { FormControl, FormLabel, Input as CInput, InputProps as ChakraInputProps  } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <CInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant={"filled"}
        _hover={{bgColor:
        'gray.900'}}
        size="lg" 
        {...rest}
      />
    </FormControl>
  )
}