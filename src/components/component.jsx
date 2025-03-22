import { useState } from "react";
import images from "../data/images.json";
import styles from "/src/components/Card.module.css";
import question from "/src/assets/question.svg";

const imagesInit = images.map((image, index) => ({
    ...image,

    isSelected: index === 0,
}));

export const Card = () => {
    const [images, setImages] = useState(imagesInit);
    const [secondImages, setSecondImages] = useState(imagesInit);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [secondSelectedImage, setSecondSelectedImage] = useState(images[0]);

    const randomizeFirstImages = () => {
        const shuffledImages = images.sort(() => Math.random() - 0.5);
        setImages(shuffledImages);
    };

    const randomizeSecondImages = () => {
        const shuffledImages = images.sort(() => Math.random() - 0.5);
        setSecondImages(shuffledImages);
    };

    const handleClickFirst = (id) => {
        const newImages = images.map((image) => {
            if (image.id === id) {
                setSelectedImage(image.url);
                return {
                    ...image,
                    isSelected: true,
                };
            }
            return {
                ...image,
                isSelected: false,
            };
        });
        setImages(newImages);
    };
    const handleClickSecond = (id) => {
        const newImages = secondImages.map((image) => {
            if (image.id === id) {
                setSecondSelectedImage(image.url);
                return {
                    ...image,
                    isSelected: true,
                };
            }
            return {
                ...image,
                isSelected: false,
            };
        });
        setSecondImages(newImages);
    };

    return (
        <>
            <div className={styles.imageList}>
                {images.map((image) => {
                    return (
                        <div className={styles.container}>
                            <img
                                key={image.id}
                                className={styles.image}
                                src={image.isSelected ? selectedImage : question}
                                onClick={() => handleClickFirst(image.id)}
                            />
                        </div>
                    );
                })}
            </div>
            <div className={styles.imageList}>
                {secondImages.map((image) => {
                    return (
                        <div className={styles.container}>
                            <img
                                key={image.id}
                                className={styles.image}
                                src={image.isSelected ? secondSelectedImage : question}
                                onClick={() => handleClickSecond(image.id)}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};