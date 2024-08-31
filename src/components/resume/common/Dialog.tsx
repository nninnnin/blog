import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const ResumeDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        이것이 트리거
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-red-500" />

        <Dialog.Content className="bg-blue-300 w-[100px] h-[100px]">
          <Dialog.Title>후하후하</Dialog.Title>

          <Dialog.Description>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur, animi
            iste? Eligendi eos omnis illum, magnam
            aperiam animi tempore eaque ex commodi
            veniam at mollitia autem quo
            doloremque quisquam minus unde!
            Tenetur alias vel consectetur atque,
            explicabo facere dolor eligendi
            molestias earum maiores animi quas
            magni accusantium adipisci. Amet,
            culpa.
          </Dialog.Description>

          <Dialog.Close>닫아야지..</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResumeDialog;
