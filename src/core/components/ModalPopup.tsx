import React, { useState, useCallback, useRef } from "react";
import {
  UseDisclosureProps,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  Input,
  Button,
  Text,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

import { v4 as uuid } from "uuid";

import { supabase } from "utils/supabase";

export const ModalPopup = (props: UseDisclosureProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const confNameRef = useRef(null);
  const confLinkRef = useRef(null);
  const confAuthorRef = useRef(null);
  const confMoreRef = useRef(null);

  const createConference = useCallback(async () => {
    try {
      const { data, error } = await supabase.from("conferences").insert([
        {
          conf_id: uuid(),
          conference_name: confNameRef.current,
          conference_link: confLinkRef.current,
          conference_author: confAuthorRef.current,
          conference_more: confMoreRef.current,
        },
      ]);

      console.log(data);
      console.error(error);
    } catch (error) {
      throw new Error(`Error while creating a conference ${error}`);
    }
  }, [confNameRef, confLinkRef, confAuthorRef, confMoreRef]);

  // const inputChangeHandler = (
  //   setState: (event: any) => void,
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setState(e);
  // };

  console.log(
    typeof window !== undefined && process.env.NEXT_PUBLIC_SUPABASE_URL
  );

  console.log(
    startDate.getDate(),
    startDate.getMonth(),
    startDate.getFullYear()
  );

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adaugati conferinta!</ModalHeader>
          <ModalBody>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Text>Conference name*</Text>
                <Input
                  placeholder="ex: GDG Cluj-Napoca"
                  ref={confNameRef}
                  isRequired
                />
              </Stack>
              <Stack spacing={1}>
                <Text>Conference link*</Text>
                <Input
                  placeholder="ex: https://gdg.community.dev/events/details/google-gdg-cluj-napoca-presents-devfest-romania-2021/"
                  ref={confLinkRef}
                  isRequired
                />
              </Stack>
              <Stack spacing={1}>
                <Text>Conference date*</Text>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </Stack>
              <Stack spacing={1}>
                <Text>Author email*</Text>
                <Input
                  placeholder="ex: test@test.com"
                  ref={confAuthorRef}
                  isRequired
                />
              </Stack>
              <Stack spacing={1}>
                <Text>More</Text>
                <Textarea placeholder="More details..." ref={confMoreRef} />
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={createConference}>Submit</Button>
            <Button onClick={props.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

<style jsx>{`
  .react-datepicker {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", sans-serif;
    overflow: hidden;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 90px;
  }

  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    height: 8px;
  }

  .react-datepicker__navigation--previous {
    border-right-color: #cbd5e0;
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: #a0aec0;
  }
  .react-datepicker__navigation--next {
    border-left-color: #cbd5e0;
  }
  .react-datepicker__navigation--next:hover {
    border-left-color: #a0aec0;
  }

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
  }

  .react-datepicker__header {
    border-radius: 0;
    background: #f7fafc;
  }

  .react-datepicker,
  .react-datepicker__header,
  .react-datepicker__time-container {
    border-color: #e2e8f0;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: inherit;
    font-weight: 600;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    margin: 0 1px 0 0;
    height: auto;
    padding: 7px 10px;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item
    :hover {
    background: #edf2f7;
  }

  .react-datepicker__day:hover {
    background: #edf2f7;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background: #3182ce;
    font-weight: normal;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected
    :hover {
    background: #2a69ac;
  }
`}</style>;
