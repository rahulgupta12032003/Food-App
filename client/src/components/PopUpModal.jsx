import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
  import "./Foods.css"

function PopUpModal({foods, isOpen, onClose}) 
{
  
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  className="popUp_modal">
          <ModalHeader>{foods.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={foods.image} alt="foods" height="100%" width="100%" />
            <p className="fontMont pStag2" >{foods.description}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopUpModal;
