import { DishService } from "./../services/dish.service";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Dish } from "../shared/dish";
import { switchMap } from "rxjs/operators";
import { Comment } from "../shared/comment";
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  Validators,
} from "@angular/forms";

import {
  state,
  trigger,
  transition,
  style,
  animate,
} from "@angular/animations";

import {visibility , flyInOut ,expand}  from '../animations/app.animation';

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
  host :{
    '[@flyInOut]' : 'true',
    'style' : 'display : block;'
  },
  animations: [
    visibility() , flyInOut() ,expand()
  ],
})

export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  dishcopy = null;
  currentDate: any;
  dishCopy: Dish;

  visibility ='shown';

  comment: Comment;
  commentForm: FormGroup;
  @ViewChild("fform") commentFormDirective;

  errMess: string;
  formErrors = {
    author: "",
    rating: "",
    comment: "",
  };

  validationMessages = {
    author: {
      required: "Author Name is required.",
      minlength: "Author Name must be at least 2 characters long.",
      maxlength: "Author Name cannot be more than 25 characters long.",
    },
    rating: {
      required: "Rating is required.",
    },
    comment: {
      required: "Comment is required.",
    },
  };

  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    @Inject("BaseURL") public BaseURL
  ) {}

  ngOnInit() {
    ///let id = this.route.snapshot.params['id'];
    this.dishService
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
    this.route.params
      .pipe(
        switchMap((params: Params) => 
        { this.visibility ='hidden' ; return this.dishService.getDish(+params['id']); })) 
      .subscribe(
        (dish) => {
          this.dish = dish;
          this.dishCopy = dish;
          this.setPrevNext(dish.id);
          this.visibility ='shown';
        }, //);
        (errmess) => (this.errMess = <any>errmess)
      );
    this.createForm();
    this.currentDate = new Date().toISOString();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  goBack() {
    this.location.back();
  }

  // @Input() dish : Dish;

  createForm() {
    this.commentForm = this.fb.group({
      author: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      comment: ["", [Validators.required, Validators.minLength(1)]],
      rating: 5,
    });

    this.commentForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dishCopy.comments.push(this.comment);
    this.dishService.putDish(this.dishCopy).subscribe(
      (dish) => {
        this.dish = dish;
        this.dishCopy = dish;
      },
      (errmess) => {
        this.dish = null;
        this.dishCopy = null;
        this.errMess = <any>errmess;
      }
    );
    console.log(this.comment);
    this.comment = null;
    this.commentForm.reset({
      author: "",
      comment: "",
      rating: 5,
    });
  }
}

/* onSubmit() {
  this.comment = this.commentForm.value;
  this.comment.date = new Date().toISOString();
  console.log(this.comment);

  this.dishCopy.comments.push(this.comment);
  this.dishService.putDish(this.dishCopy)
  .subscribe (dish => {
    this.dish= this.dishCopy; this.dish= this.dish;
  }),
  errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; }
 this.dishcopy.save() 
    .subscribe(dish => { this.dish = dish; console.log(this.dish); }); 
 
  this.commentForm.reset({
    author: '',
    rating: 5,
    comment: ''
  });
}
 */
