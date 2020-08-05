import React, { useContext } from 'react';
import classes from './AllActivities.module.css';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonButton } from '@ionic/react';
import ActivitiesContext from '../../data/activities-context';

const AllActivities: React.FC = () => {

    const activitiesCtxt = useContext(ActivitiesContext)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>All Activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {activitiesCtxt.activities.map(activity => (
                        <IonRow key={activity.id}>
                            <IonCol className="ion-text-center">
                                <IonCard>
                                    <img src={activity.imageUrl} alt="Activity" />
                                    <IonCardHeader>
                                        <IonCardTitle>{activity.hour}</IonCardTitle>
                                        <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{activity.description}</p>
                                        <IonItem lines="none">
                                            <IonButton fill="clear" className={classes.FullWidth}>Complete Activity</IonButton>
                                        </IonItem>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AllActivities;