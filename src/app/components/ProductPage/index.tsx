"use client";

import { poppins } from "@/app/fonts";
import {
  Container,
  FormContainer,
  ImageProductContainer,
  ImageContainer,
  SelectCategoryLabel,
  SelectContainer,
  DescriptionLabel,
  ToggleSwitchContainer,
  ToggleSwitch,
  LabelToglleSwitch,
  InputCheckBoxInToggle,
  Switch,
  FormButtonsContainer,
  ImageWithoutUpload,
  ImageWithUpload,
  ButtonsImageContainer,
} from "./styles";
import AvatarEditor from "react-avatar-editor";
import Title from "@/app/components/Title";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";

import Dropzone from "react-dropzone";
import useMocks from "@/mocks/mock";
import { useRouter } from "next/navigation";
import foodImg from "../../../../public/foodImg.png";
type ProductPageProps = {
  productId: string;
  mode?: "private" | "public";
  modePage: string;
};
export default function ProductPage({ modePage }: ProductPageProps) {
  const modeRegister = modePage === "register";

  const title = modeRegister ? `CADASTRO DE PRODUTO` : `EDIÇÃO DE PRODUTO`;
  const { categories, product } = useMocks();
  const [foodTitle, setFoodTitle] = useState<string>(
    modeRegister ? "" : `${product.name}`
  );
  const textAreaMaxLength = 300;
  const [remaining, setRemaining] = useState<number>(textAreaMaxLength);
  const [checked, setChecked] = useState<boolean>(modeRegister ? false : true);
  const [price, setPrice] = useState<string>(
    modeRegister ? "" : `${product.price}`
  );
  const [priceIsValid, setPriceIsValid] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(
    modeRegister ? "" : `${product.description}`
  );
  const [category, setCategory] = useState<string>("");

  const [uploadName, setUploadName] = useState<string>(
    modeRegister ? "" : foodImg.src
  );
  const [isUploadedImage, setIsUploadedImage] = useState<boolean>(false);
  const [, setFile] = useState<File | null>(null);
  const router = useRouter();
  const emptyingValues = () => {
    setFoodTitle(``);
    setChecked(false);
    setPrice(``);
    setDescription(``);
    setCategory(``);
    setUploadName(``);
    setIsUploadedImage(false);
    setFile(null);
  };

  useEffect(() => {
    if (!modeRegister) {
      setIsUploadedImage(true);
    }
  }, [modeRegister]);

  function handleTextAreaLength(event: ChangeEvent<HTMLTextAreaElement>) {
    setRemaining(textAreaMaxLength - event.target.value.length);
  }

  function handleInputPrice(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (!/^[\d,]*$/.test(value)) {
      setPriceIsValid(true);
      target.value = value.replace(/[^\d,]/g, "");
    } else {
      setPriceIsValid(false);
    }
  }

  function onChangeFile(
    acceptedFiles?: File[],
    event?: ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event?.target?.files?.[0] || acceptedFiles?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileUrl = URL.createObjectURL(selectedFile);
      setUploadName(fileUrl);
      setIsUploadedImage(() => true);
    }
  }

  function handleRemoveUpload() {
    setUploadName("");
    setIsUploadedImage(false);
    setFile(null);
  }

  function handleRequest() {
    emptyingValues();
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    handleRequest();
  }

  if (!!categories && categories.length === 1) {
    setCategory(() => categories[0].name);
  }

  return (
    <Container>
      <FormContainer>
        <Title>{title}</Title>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <Input
              label="TITULO"
              className={poppins.className}
              id="foodTitle"
              type="text"
              placeholder="Dê um título ao seu produto"
              onChange={(e) => setFoodTitle(e.target.value)}
              value={foodTitle}
            />

            {isUploadedImage && product?.upload ? (
              <ImageProductContainer>
                <ImageWithUpload>
                  <p className={poppins.className}>
                    Como será visualizado pelo cliente
                  </p>

                  <Dropzone
                    noKeyboard
                    onDrop={(acceptedFiles) => onChangeFile(acceptedFiles)}
                    noClick={true}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <ImageContainer {...getRootProps()}>
                        <AvatarEditor
                          image={uploadName}
                          height={127}
                          width={127}
                          scale={1}
                          border={0}
                        />
                        <input {...getInputProps()} />
                      </ImageContainer>
                    )}
                  </Dropzone>

                  <ButtonsImageContainer>
                    <button
                      type="button"
                      className={poppins.className}
                      onClick={handleRemoveUpload}
                    >
                      REMOVER
                    </button>

                    <button type="button" className={poppins.className}>
                      EDITAR
                      <input
                        type="file"
                        onChange={(event) => onChangeFile(undefined, event)}
                      />
                    </button>
                  </ButtonsImageContainer>
                </ImageWithUpload>
              </ImageProductContainer>
            ) : (
              <Dropzone
                noKeyboard
                onDrop={(acceptedFiles) => onChangeFile(acceptedFiles)}
              >
                {({ getRootProps, getInputProps }) => (
                  <ImageProductContainer {...getRootProps()}>
                    <ImageWithoutUpload>
                      <Image
                        src={"/productImage.png"}
                        alt="Imagem exemplo"
                        height={51}
                        width={51}
                      />
                      <p className={poppins.className}>Arraste uma imagem</p>
                      <div>
                        <div></div>
                        <span className={poppins.className}>ou</span>
                        <div></div>
                      </div>
                      <button className={poppins.className} type="button">
                        <input
                          onChange={(event) => onChangeFile(undefined, event)}
                          type="file"
                          {...getInputProps()}
                        />
                        Selecione do computador
                      </button>
                    </ImageWithoutUpload>
                  </ImageProductContainer>
                )}
              </Dropzone>
            )}

            <SelectCategoryLabel
              htmlFor="foodCategory"
              className={poppins.className}
            >
              SELECIONE EM QUAL CATEGORIA ESTE PRODUTO SERA EXIBIDO
              <SelectContainer>
                <select
                  className={poppins.className}
                  value={category}
                  id="foodCategory"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories &&
                    categories?.map((category, index) => (
                      <option key={index} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                </select>
                <MdOutlineKeyboardArrowDown size={24} color="#F9881F" />
              </SelectContainer>
            </SelectCategoryLabel>
            <DescriptionLabel
              htmlFor="description"
              className={poppins.className}
            >
              DESCRICAO
              <div>
                <textarea
                  value={description}
                  id="description"
                  maxLength={textAreaMaxLength}
                  className={poppins.className}
                  onInput={handleTextAreaLength}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Exemplo: 2 carnes de hamburger de angus, alface americana,
                  catupiry original, molho especial, pao da hora e queijo de
                  avestruz"
                ></textarea>

                <span className={poppins.className}>
                  Restam {remaining} caracteres
                </span>
              </div>
            </DescriptionLabel>

            <ToggleSwitchContainer>
              <ToggleSwitch>
                <p className={poppins.className}>
                  Exibir o produto no cardapio
                </p>
                <LabelToglleSwitch>
                  <InputCheckBoxInToggle
                    type="checkbox"
                    onChange={() => setChecked(!checked)}
                  />
                  <Switch />
                </LabelToglleSwitch>
              </ToggleSwitch>
            </ToggleSwitchContainer>

            <Input
              className={poppins.className}
              id="price"
              type="text"
              placeholder="Exemplo: 15,25"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              onInput={handleInputPrice}
            />

            {priceIsValid && (
              <span> O preco de seu prato precisa ser um número</span>
            )}
          </fieldset>

          <FormButtonsContainer>
            <Button text={`Cancelar`} onClick={() => router.back()} />
            <Button text={`Salvar`} />
          </FormButtonsContainer>
        </form>
      </FormContainer>
    </Container>
  );
}
