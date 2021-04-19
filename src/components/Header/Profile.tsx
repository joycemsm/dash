import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
         <Text>Joyce Mara</Text>
         <Text color="gray.300" fontSize="Small">joy@gmail.com</Text>
       </Box>
      )}
    <Avatar size="md" name="Joyce Mara"/>
  </Flex>
  );
}