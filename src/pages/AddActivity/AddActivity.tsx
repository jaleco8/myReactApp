import React, { useRef, useContext } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonButton } from '@ionic/react';
import ActivitiesContext, { ActivityType } from '../../data/activities-context';
import { useHistory } from 'react-router-dom';

const AddActivity: React.FC = () => {

    const history = useHistory();

    const activitiesCtxt = useContext(ActivitiesContext);

    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
    const hourInput = useRef<HTMLIonDatetimeElement>(null);

    const addActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;
        const startDate = new Date(hourInput.current?.value as string);
        const startHour = startDate.getHours() + ':' + startDate.getMinutes();

        if (title && description && activityType && startHour) {
            activitiesCtxt.addActivity(title, description, startHour, activityType);
            history.replace('/all-activities');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Add Activity</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonSegment ref={activityTypeInput}>
                                <IonSegmentButton value="word">
                                    <IonLabel>Work</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="rest">
                                    <IonLabel>Rest</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="hobby">
                                    <IonLabel>Hobby</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Activity title</IonLabel>
                                <IonInput type="text" ref={titleInput}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Activity description</IonLabel>
                                <IonInput type="text" ref={descriptionInput}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Starting hour</IonLabel>
                                <IonDatetime ref={hourInput} display-format="h:mm A" picker-format="h:mm A" value={new Date().toISOString()} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center ion-margin-top">
                            <IonButton onClick={addActivity} expand="block" fill="outline">Add Activity</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AddActivity;